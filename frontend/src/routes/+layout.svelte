 <script>
  import "../app.css";
</script>

<div class="flex min-h-screen">
  <div class="w-64 bg-gray-200 p-5 shadow-lg">
    <nav>
      <ul>
        <li class="mb-4"><a href="/" class="text-blue-500 hover:text-blue-700">Home</a></li>
        <li class="mb-4"><a href="/about" class="text-blue-500 hover:text-blue-700">About</a></li>
        <li class="mb-4"><a href="/contact" class="text-blue-500 hover:text-blue-700">Contact</a></li>
      </ul>
    </nav>
  </div>
  <div class="flex-1 p-5 flex items-center justify-center">
   <slot/>
  </div>
</div>

