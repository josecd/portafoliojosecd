<template>
    <div>

        <header class="bg-white shadow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900" v-on:click="data"> <router-link
                        active-class="active" class="btn btn-outline-primary me-2" to="/">Ir a inicio</router-link></h1>

            </div>
            <p>User ID: {{ $route.params.id }}</p>
        </header>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                <div class="bg-gray-100">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

                            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                <div class="group relative">
                                    <div
                                        class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                                            alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
                                            class="h-full w-full object-cover object-center">
                                    </div>
                                    <h3 class="mt-6 text-sm text-gray-500">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Desk and Office
                                        </a>
                                    </h3>
                                    <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
                                </div>
                                <div class="group relative">
                                    <div
                                        class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                                            alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                                            class="h-full w-full object-cover object-center">
                                    </div>
                                    <h3 class="mt-6 text-sm text-gray-500">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            Self-Improvement
                                        </a>
                                    </h3>
                                    <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, } from "vue-router";


const data = () => {
    console.log('sss');
}
</script>
