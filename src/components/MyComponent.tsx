import { defineComponent, ref } from 'vue';

const MyComponent = defineComponent({
  name: 'MyComponent',
  setup() {
    const count = ref(0);

    const increment = () => {
      count.value += 1;
    };

    return () => (
      <div>
        <h1>{count.value}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  },
});

export default MyComponent;
