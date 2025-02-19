<template>
    <div class="flex w-screen place-items-center px-4 lg:py-0 py-4  lg:px-12 justify-between">
        <img src="/public/inkme logo.png" alt="" class="lg:w-36 w-20  hover:cursor-pointer hover:scale-105 transition mr-4 lg:mr-0 " @click="router.push('/')">
        <div class="flex w-full place-items-center justify-center gap-6  lg:gap-12">
            <button>
                <h3 class="font-inter">Catálogo</h3>
            </button>
            <button>
                <h3 class="font-inter">Diseños de Comunidad</h3>
            </button>
            <div class="w-1/4 md:w-[36%] hidden md:flex bg-navy rounded-xl p-2 text-white h-1/2 lg:w-1/3 justify-between">
                <input type="text" class="outline-none w-full" placeholder="Buscar diseños y artículos">
                <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                </button>
            </div>
            <div class="relative dropdown">
                <h3 class="font-inter">Usuario</h3>
                <div class="dropdown-content text-white p-2 font-inter bg-navy rounded-xl">
                    <p>Mis Diseños</p>
                    <p>Mis Pedidos</p>
                    <p>Cerrar sesión</p>
                </div>
            </div>

            <button class="md:hidden block rounded-xl p-2 bg-navy text-white" @click="isMobileSearchActive = !isMobileSearchActive">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </div>

    </div>
    <div :class="{'bg-navy':true , 'flex':true ,  'p-3':true, 'rounded-b-xl': true, 'hidden':!isMobileSearchActive, 'md:hidden':true, 'transition':true , 'duration-300':true , 'ease-in-out':true}">
        <input type="text" class="outline-none w-full text-white" placeholder="Buscar diseños y artículos">
        <button class="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6 hover:scale-110 transition">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>   
        </button>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter()

const isMobileSearchActive = ref(false);
const isUserDropdownActive = ref(false);

</script>

<style scoped>
    h3{
        color: #00224d;
        font-size: 12px;
        cursor: pointer;
    }
    @media screen and (min-width: 768px) {
        h3{
            font-size: 18px;
        }
    }
    h3::after{
        content: '';
        width: 0%;
        height: 5px;
        background-color: #00224d;
        display: block;
        
    }
    h3:hover::after{
        width: 100%;
        transition: 300ms ease-in-out;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        p{
            padding: 5px;
            cursor: pointer;
        }
    }
    .dropdown:hover .dropdown-content {display: block;}
    .dropdown-content p:hover{
        cursor: pointer;
        background-color: white;
        color: #00224d;
        border-radius: 10px;
    }

    ::placeholder {
  color: white;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder { /* Edge 12 -18 */
  color: white;
}
</style>