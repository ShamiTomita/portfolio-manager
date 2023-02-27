Rails.application.routes.draw do
  get 'projects/index'
  post 'projects/create'
  get '/show/:id', to: 'projects#show'
  delete '/destroy/:id', to: 'projects#destroy'
  root "index#home"
  get '/*path' => 'index#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
