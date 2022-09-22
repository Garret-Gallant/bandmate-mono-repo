Rails.application.routes.draw do
  # index, create, show, update, destroy
  resources :bands, only: [:index, :create, :show, :update, :destroy]
  resources :join_user_bands, only: [:index]
  resources :demos, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :create, :show, :update, :destroy]
  
  get '/hello', to: 'application#hello_world'
  get '/me', to: 'user#show'
end
