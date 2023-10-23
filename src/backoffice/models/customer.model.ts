import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.models';

export class Customer {
  constructor(
    public name: string,
    public document: string,
    public email: string,
    public pets: Pet[],
    public billingAddress: Address, //endereco de cobranca
    public shippingAddress: Address, // endereco de entrega
    public creditCard: CreditCard,
    public password: string,
    public active: boolean,
  ) {}
}
