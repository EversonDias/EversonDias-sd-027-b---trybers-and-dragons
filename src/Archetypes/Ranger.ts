import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private Energy: EnergyType;
  static instances = 0;

  constructor(name: string) {
    super(name);
    this.Energy = 'stamina';
    Ranger.instances += 1;
  }

  get energyType(): EnergyType {
    return this.Energy;
  }

  get name(): string {
    return this.name;
  }

  static override createdArchetypeInstances() {
    return Ranger.instances;
  }
}