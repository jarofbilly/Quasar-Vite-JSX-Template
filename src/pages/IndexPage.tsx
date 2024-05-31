import { defineComponent, ref } from 'vue';
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent';
import { QInput, QPage } from 'quasar';

export default defineComponent({
    setup() {
        const meta = ref<Meta>({
            totalCount: 1200
        });

        const todos = ref<Todo[]>([
            {
              id: 1,
              content: 'ct1'
            },
            {
              id: 2,
              content: 'ct2'
            },
            {
              id: 3,
              content: 'ct3'
            },
            {
              id: 4,
              content: 'ct4'
            },
            {
              id: 5,
              content: 'ct5'
            }
        ]);

        return () => (
            <QPage class="row items-center justify-evenly">
                <ExampleComponent
                    title="Example component"
                    active
                    todos={todos.value}
                    meta={meta.value} />
          </QPage>
        )
    }
});
