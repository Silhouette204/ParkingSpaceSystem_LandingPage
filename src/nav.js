export function renderNavigation(){
   const navContainer = document.querySelector("#navigation-container");

   if(!navContainer){
    return;
   }

   navContainer.innerHTML = `
    
      <div class="flex flex-row justify-between items-center p-5 lg:px-20 bg-primary fixed w-full top-0 z-50 shadow-md">
  
  <div class="flex items-center gap-2">
    <button id="nav-bar" class="p-2 text-text rounded-xl text-2xl cursor-pointer hover:bg-text hover:text-primary transition duration-300 lg:hidden">
      <i class="fa-solid fa-bars"></i>
    </button> 
    <h1 class="text-2xl font-bold text-text">Parking Hub</h1>
  </div>

  <nav class="hidden lg:flex items-center gap-8">
  <a href="/index.html" class="text-lg font-medium text-text hover:text-secondary transition">Home</a>
    <a href="/dashboard.html" class="text-lg font-medium text-text hover:text-secondary transition">Dashboard</a>
    <a href="/book-reservation.html" class="text-lg font-medium text-text hover:text-secondary transition">Book Reservation</a>
    <a href="/profile.html" class="text-lg font-medium text-text hover:text-secondary transition">Profile</a>
  </nav>

  <div class="flex justify-center items-center gap-3">
    <a href="#" class="hidden md:inline-flex py-2 px-6 bg-secondary text-primary rounded-full font-semibold hover:bg-text transition duration-300">Sign Up</a>
    
    <a href="#" class="text-xl font-semibold text-text hover:bg-text hover:text-primary py-2 px-4 hover:rounded-full transition-all duration-300 ease-in-out">
      Log Out
    </a>
  </div>
</div>

        <div id="backdrop" class="fixed inset-0 bg-backdrop/50 opacity-0 pointer-events-none transition-opacity duration-300 z-50"></div>

<aside id="side-nav" 
  class="fixed top-0 left-0 w-65 h-full bg-white/60 backdrop-blur-md border-r border-primary shadow-xl transform transition-transform duration-300 ease-in-out z-50 -translate-x-full overflow-auto">

  <div class="flex items-center justify-baseline py-5 gap-2 mx-2  border-b border-primary">
      <i id="exit-nav" class="fa-solid fa-xmark text-2xl cursor-pointer hover:bg-secondary px-3 py-2 hover:text-primary  hover:duration-300 ease-in-out rounded-4xl"></i>
      <a href="#" class="text-2xl font-bold  text-text">Parking Hub</a>
</div>

    <div class="p-4">
    <nav class="border-b-2">
    <ul class="flex flex-col gap-7 mt-5">

      <li class="link-nav"><i class="fa-solid fa-house mx-2"></i><a href="/index.html">Home</a></li>
     
      <li class="link-nav"><i class="fa-solid fa-box mx-2"></i><a href="/index.html">Dashboard</a></li>

      <li class="link-nav"><i class="fa-solid fa-book mx-2"></i><a href="/book-reservation.html">Book Reservation</a></li>

       <li class="link-nav"><i class="fa-solid fa-user mx-2"></i><a href="/profile.html">Profile</a></li>
    </ul>

    <a href="#" class="inline-flex mx-3 my-10 py-3 px-10 bg-secondary text-primary text-base font-semibold rounded-2xl hover:bg-primary hover:text-secondary transition duration-300 ease-in-out">Sign Up</a>
</nav>

</div>
</aside>
   `
  setupNavigation();
}

function setupNavigation(){
const navBar = document.querySelector('#nav-bar');
const sideNav = document.querySelector('#side-nav');
const exitNav = document.querySelector('#exit-nav');
const backdrop = document.querySelector('#backdrop');

navBar.addEventListener('click', () => {
  sideNav.classList.remove('-translate-x-full');

  backdrop.classList.remove('opacity-0', 'pointer-events-none');  
  backdrop.classList.add('opacity-100', 'pointer-events-auto'); 

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  // I-lock ang scroll at lagyan ng padding para hindi tumalon ang layout
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;
});

function closeSideNav() {
  sideNav.classList.add('-translate-x-full');

  backdrop.classList.add('opacity-0', 'pointer-events-none'); 
  backdrop.classList.remove('opacity-100', 'pointer-events-auto');  

  // Ibalik ang scroll
document.body.style.overflow = '';
  document.body.style.paddingRight = '0px';
}

exitNav.addEventListener('click', closeSideNav);
backdrop.addEventListener('click', closeSideNav);
}

