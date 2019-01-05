Rails.application.routes.draw do
  resources :comments
  resources :events
  resources :posts do
    resources :comments
  end

  resources :industries do
    resources :posts
    resources :events
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
