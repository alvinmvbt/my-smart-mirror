import { Component } from '@angular/core';

@Component({
  selector: 'commands',
  template: `
            <div class="app">
              <h1>Available Commands</h1>
              <h4>Get the forecast for the day</h4>
              <h4>Get the forecast for the week</h4>
              <h4>Get maps</h4>
            </div>
            `
})

export class CommandsComponent {
  constructor() { }
}