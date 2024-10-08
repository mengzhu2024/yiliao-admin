const base = {
    get() {
                return {
            url : "http://localhost:8080/springbootwssjx/",
            name: "springbootwssjx",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootwssjx/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "医疗服务系统"
        } 
    }
}
export default base
