import Sidebar from "../components/Sidebar";
export default {
    title: "Navigation/Sidebar",
    component: Sidebar,
};
var Template = function (args) {
    return <Sidebar {...args}/>;
};
export var ComponentSidebar = Template.bind({});
ComponentSidebar.args = {
    username: "Vitória Fusco",
    profile: "Administrador",
    itemsSidebar: [{ link: "www.google.com.br", name: "Fluxo de caixa" }],
};
//# sourceMappingURL=Sidebar.stories.jsx.map