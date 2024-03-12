<template>
<div class="container">
    <div v-if="isLoading">正在加载...</div>
    <div v-else>
    <h1>{{ file.name }}</h1>
    <div v-html="fileContent"></div>
    </div>
</div>
</template>
<script>
import marked from 'marked';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/github-dark.css';
export default {
data() {
    return {
    file: null,
    fileContent: null,
    isLoading: true,
    };
},
mounted() {
    // 发起请求获取文件内容
    this.getFileContent();
},
methods: {
    async getFileContent() {
        try {
            const response = await fetch('https://api.github.com/repos/Ganxy03/xh_web/contents/wiki/用户手册.md?ref=main');
        //   const result = await response.json();
        //   this.file = result;
        //   this.fileContent = atob(result.content); // 解码base64内容
        //   this.isLoading = false;

        const result = await response.json();
        this.file = result;
        const encodedContent = result.content;  // 获取编码后的内容
        const decodedContent = decodeURIComponent(escape(atob(encodedContent)));  // 解码base64内容，并进行UTF-8编码转换
        console.log(decodedContent)
        this.fileContent = marked(decodedContent);
        this.isLoading = false;
        // const result = await response.json();
        // this.file = result;
        // // console.log(result)
        // const encodedContent = result.content;  // 获取编码后的内容
        // const decodedContent = decodeURIComponent(escape(atob(encodedContent)));  // 解码base64内容，并进行UTF-8编码转换
        // // 通过动态创建 style 标签，并添加 CSS 内容来引入 GitHub Wiki 的 CSS
        // console.log(decodedContent)
        // const style = document.createElement('style');
        // style.textContent = `
        // @import url('https://raw.githubusercontent.com/Ganxy03/xh_web/main/wiki/css/style.css');
        // `;
        // document.head.appendChild(style);
        // this.fileContent = decodedContent;
        // this.isLoading = false;
        // marked.setOptions({
        //     highlight: function (code, language) {
        //         const validLanguage = language && hljs.getLanguage(language) ? language : 'plaintext';
        //         const highlightedCode = hljs.highlight(validLanguage, code).value;
        //         return `<pre><code class="hljs ${validLanguage}">${highlightedCode}</code></pre>`;
        //     }
        // });
        
        } catch (error) {
            console.error(error);
        }
    },
    
},
};
</script>
<style>
/* CSS样式 */
.container {
    width: 50%;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
}

h3 {
    color: blue;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
</style>