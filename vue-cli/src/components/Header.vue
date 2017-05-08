<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
          <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End day</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Save data</a></li>
              <li><a href="#">Load data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
