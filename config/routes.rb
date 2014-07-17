NewReader::Application.routes.draw do
  root to: "static_pages#index"
  
  namespace :api do
    resources :feeds, only: [:index, :create, :show] do
      resources :entries, only: [:index]
    end
  end

end
