import { defineComponent, ref } from 'vue';
import axios from 'axios';

const RetryRequestComponent = defineComponent({
  name: 'RetryRequestComponent',
  setup() {
    const data = ref<any>(null);
    const error = ref<string | null>(null);
    const loading = ref(false);

    const fetchDataWithRetry = async (url: string, retries = 3, delay = 2000) => {
      loading.value = true;
      for (let i = 0; i < retries; i++) {
        try {
          const response = await axios.get(url);
          data.value = response.data;
          error.value = null;
          break;
        } catch (err: any) {
          if (err.response && err.response.status >= 500 && i < retries - 1) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          } else {
            error.value = err.message;
            data.value = null;
          }
        }
      }
      loading.value = false;
    };

    fetchDataWithRetry('https://jsonplaceholder.typicode.com/todos/1');

    return () => (
      <div>
        <h2>Retry Request Component</h2>
        {loading.value ? (
          <p>Loading...</p>
        ) : error.value ? (
          <p>Error: {error.value}</p>
        ) : (
          <pre>{JSON.stringify(data.value, null, 2)}</pre>
        )}
      </div>
    );
  },
});

export default RetryRequestComponent;
