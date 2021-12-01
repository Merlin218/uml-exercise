<script>
import { h } from "vue";
import { Menu } from "@arco-design/web-vue";
export default {
  setup(props) {
    return () => {
      debugger;
      return h(Menu, { mode: "horizontal" }, [h("div", {}, "hhh")]);
    };
  },
};
</script>
<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  padding: 40px;
  background-color: var(--color-neutral-2);
}
</style>
