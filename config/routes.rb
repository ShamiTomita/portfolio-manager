Rails.application.routes.draw do
  get 'project/index'
  post 'project/create'
  get '/show/:id', to: 'project#show'
  delete '/destroy/:id', to: 'project#destroy'
  root "index#home"
  get '/*path' => 'index#home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
