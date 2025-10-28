// DOM 요소 선택
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');

// 할일 배열
let todos = [];
let currentFilter = 'all';

// 로컬스토리지에서 데이터 불러오기
function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
        renderTodos();
    }
}

// 로컬스토리지에 데이터 저장
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 할일 추가
function addTodo() {
    const text = todoInput.value.trim();

    if (text === '') {
        alert('할일을 입력해주세요!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.unshift(todo);
    todoInput.value = '';
    saveTodos();
    renderTodos();
}

// 할일 삭제
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// 할일 완료/미완료 토글
function toggleTodo(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
    }
}

// 필터링된 할일 가져오기
function getFilteredTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'completed':
            return todos.filter(todo => todo.completed);
        default:
            return todos;
    }
}

// 할일 렌더링
function renderTodos() {
    const filteredTodos = getFilteredTodos();

    // 리스트 초기화
    todoList.innerHTML = '';

    // 할일이 없을 때
    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">등록된 할일이 없습니다.</div>';
    } else {
        // 할일 목록 렌더링
        filteredTodos.forEach(todo => {
            const li = document.createElement('li');
            li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

            li.innerHTML = `
                <input
                    type="checkbox"
                    class="todo-checkbox"
                    ${todo.completed ? 'checked' : ''}
                    onchange="toggleTodo(${todo.id})"
                />
                <span class="todo-text">${todo.text}</span>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">삭제</button>
            `;

            todoList.appendChild(li);
        });
    }

    // 통계 업데이트
    updateStats();
}

// 통계 업데이트
function updateStats() {
    const total = todos.length;
    const active = todos.filter(todo => !todo.completed).length;
    const completed = todos.filter(todo => todo.completed).length;

    totalCount.textContent = `전체: ${total}`;
    activeCount.textContent = `진행중: ${active}`;
    completedCount.textContent = `완료: ${completed}`;
}

// 필터 변경
function changeFilter(filter) {
    currentFilter = filter;

    // 활성 버튼 스타일 변경
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderTodos();
}

// 이벤트 리스너
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        changeFilter(btn.dataset.filter);
    });
});

// 초기 로드
loadTodos();
