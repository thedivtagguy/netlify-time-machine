<script context="module">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import './lib/TailwindCSS.svelte'
  let increment;

</script>

<section class="text-gray-600 body-font">
  <div class="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
    <img class="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6" alt="hero" src={logo}>
    <div class="w-full text-center lg:w-2/3">
      <h1 class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">Svelte + Vite + TailwindCSS = 🌸🌸🌸</h1>
      <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <a class="p-4 px-8 my-8 text-white underline bg-red-600 rounded-3xl" href="https://github.com/Lukem121/svelte-vite-tailwind-template">Please ⭐ on GitHub</a>
      <div class="my-8">
        <Counter bind:increment={increment} id="0" />
      </div>
      <div class="flex justify-center">
        <button class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600" on:click={increment}>Button</button>
        <button class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200" on:click={increment}>Button</button>
      </div>
    </div>
  </div>
</section>