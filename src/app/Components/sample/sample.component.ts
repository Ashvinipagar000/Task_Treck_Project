import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {
selectedSubsystems: number[] = [];
selectedPartIds: number[] = [];

subsystems = [
  { id: 1, name: 'Subsystem A' },
  { id: 2, name: 'Subsystem B' },
  { id: 2, name: 'Subsystem C' },
  { id: 2, name: 'Subsystem D' },
];

parts = [
  { partId: 101, name: 'Part A1', subsystemId: 1 },
  { partId: 102, name: 'Part A2', subsystemId: 1 },
  { partId: 201, name: 'Part B1', subsystemId: 2 },
  { partId: 202, name: 'Part B2', subsystemId: 2 },
];

onSubsystemChange(event: any) {
  const currentSubsystems = event.value; // array of selected subsystem IDs

  const deselectedSubsystems = this.selectedSubsystems.filter(id => !currentSubsystems.includes(id));

  // Remove parts related to deselected subsystems
  this.selectedPartIds = this.selectedPartIds.filter(partId => {
    const part = this.parts.find(p => p.partId === partId);
    return part && !deselectedSubsystems.includes(part.subsystemId);
  });

  // Update selectedSubsystems
  this.selectedSubsystems = [...currentSubsystems];
}

onPartChange(event: any) {
  this.selectedPartIds = event.value;
}

}
