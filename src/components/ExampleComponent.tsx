import { defineComponent, computed, ref, PropType } from 'vue';
import { Todo, Meta } from './models';

export default defineComponent({
    props: {
        title: {
          type: String,
          required: true
        },
        todos: {
          type: Array as PropType<Todo[]>,
          default: () => [] 
        },
        meta: {
          type: Object as PropType<Meta>,
          required: true
        },
        active: {
          type: Boolean,
          required: true
        }
    },
    setup(props) {
        const clickCount = ref(0);

        function increment() {
            clickCount.value += 1;
            return clickCount.value;
        }

        const todoCount = computed(() => props.todos.length);

        return () => (
            <div>
                <p>{props.title}</p>
                <ul>
                    {
                        props.todos.map(todo => (
                            <li key={todo.id} onClick={increment}>
                                {todo.id} - {todo.content}
                            </li>
                        ))
                    }
                </ul>
                <p>Count: {todoCount.value} / {props.meta.totalCount}</p>
                <p>Active: {props.active ? 'yes' : 'no'}</p>
                <p>Clicks on todos: {clickCount.value}</p>
            </div>
        )
    }
});