<template>
  <div class="col-2 m-auto fs-1 mt-5">
        <div class="page-loader">
            <i class="bi bi-hourglass"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoaderComponent',
}
</script>

<style lang="scss" scoped>
@import '~bootstrap-icons/font/bootstrap-icons.css';
    .page-loader{
            animation: 2s ease-out 0s infinite rotate;
            width: 10rem;
            color: red;
            text-align: center;
        }

        @keyframes rotate{
            0%{
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }

        }
</style>