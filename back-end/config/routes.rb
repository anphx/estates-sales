Rails.application.routes.draw do
  devise_for :users

  # Api definition
  namespace :api, defaults: { format: :json } do
    scope module: :v1 do
      resources :users, :only => [:show, :create, :update, :destroy] do
        resources :products, :only => [:create]
        resources :orders, :only => [:index, :show, :create]
      end
      resources :sessions, :only => [:create, :destroy]
      resources :products, :only => [:show, :index]
    end
  end
end
