<template>
  <div class="btn-group">
    <a
      class="nav-link"
      href="#"
      id="navbarDropdownMenuLink"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-justify"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <li>
        <router-link class="dropdown-item" to="/">Página Principal</router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to="/editora">Editoras</router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to="/categoria"
          >Categorias</router-link
        >
      </li>
      <li>
        <router-link class="dropdown-item" to="/autors">Autores</router-link>
      </li>
      <li>
        <router-link class="dropdown-item" to="/livros">Livros</router-link>
      </li>
    </ul>
  </div>
</template>
