<template>
    <header>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">BoolPress</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/posts">
                        Posts
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/tags">
                        Tags
                    </router-link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
}
</script>

<style>

</style>