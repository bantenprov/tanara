@extends('layouts.admin-page')

{{-- Title --}}

@section('title', 'Tanara &middot; Admin')

{{-- Content --}}

@section('content')
    @include('pages.admin-page.home.card-media')
    @include('pages.admin-page.home.form')
    @include('pages.admin-page.home.table')
@endsection
