NewReader::Application.routes.draw do
  root to: "users#new"
  resource :session
  resources :users, only: [:create]
  
  namespace :api do
      resources :feeds, only: [:index, :create, :show, :destroy] do
        resources :entries, only: [:index]
      end
    end

end
