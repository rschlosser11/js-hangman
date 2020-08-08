Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :categories, only: [:index, :create, :show] do 
    resources :words, only: [:index]
  end
  
  resources :words, only: [:index, :create]
end
