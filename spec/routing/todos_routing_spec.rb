require 'rails_helper'

RSpec.describe TodosController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/").to route_to("todos#index")
    end
  end
end
