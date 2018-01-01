@extends('layouts.landing-page')

{{-- Title --}}

@section('title', 'Tanara')

{{-- Content --}}

@section('content')
  <transition>
    <router-view></router-view>
  </transition>
    {{-- @include('pages.landing-page.home.about')
    @include('pages.landing-page.home.image')
    @include('pages.landing-page.home.grid-card') --}}
@endsection
