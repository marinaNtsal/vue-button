import TestReusableBtn from '@/components/test-reusable-btn'

function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component("test-reusable-btn", TestReusableBtn);
}

const plugin = {
    install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
    GlobalVue = global.vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

TestReusableBtn.install = install;

export default TestReusableBtn;