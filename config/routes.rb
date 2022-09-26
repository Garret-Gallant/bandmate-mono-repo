Rails.application.routes.draw do
  # index, create, show, update, destroy
  resources :bands, only: [:index, :create, :show, :update, :destroy]
  resources :join_user_bands, only: [:index]
  resources :demos, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :update, :destroy]
  
  get '/hello', to: 'application#hello_world'
  get '/me', to: 'users#show'
  get '/latest', to: 'demos#latest'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  
end
