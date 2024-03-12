<template>
    <div class="Motto-Container">
        <div class="boder">
            <p>不应有恨 何事长向别时圆
                <br>
                <span>--苏轼《水调歌头》</span>
            </p>
        </div>
    </div>
</template>
<style>
.Motto-Container {
    width: 600px;
    height: 300px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 20px;
}
.Motto-Container .boder {
    height: 284px;
    color: #797979;
    border: 2px solid #797979;
    display: flex;
    align-items: center;
}
.Motto-Container .boder p {
    width: 80%;
    margin: 0 auto;
    font-size: 28px;
    font-weight: 700;
}
.Motto-Container .boder p span {
    width: 80%;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 400;
}
@media screen and (max-width: 768px) {
    .Motto-Container {
        width: 80%;
    }
}
@media screen and (max-width: 480px) {
    .Motto-Container {
        width: calc(96% - 44px);
    }
}
</style>