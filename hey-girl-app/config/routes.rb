Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  resources :users
  resources :posts do
    resources :comments
  end

  resources :industries do
    resources :posts
    resources :events
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
