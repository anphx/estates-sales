require 'spec_helper'

describe Address do
  let(:address) { FactoryGirl.build :address }
  subject { address }

  it { should respond_to :location }
  it { should respond_to :longitude }
  it { should respond_to :city }

  it { should belong_to :product }
end
