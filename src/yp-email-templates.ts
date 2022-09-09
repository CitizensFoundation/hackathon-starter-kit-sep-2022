import { css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { Layouts } from './flexbox-literals/classes';
import { YpBaseElement } from './yp-base-element';

import '@material/web/fab/fab-extended.js';

@customElement('yp-email-templates')
export class YpEmailTemplates extends YpBaseElement {
  @property({ type: String })
  something: string | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.something = 'SOME EMAIL TEMPLATES';
  }

  handleClicked(event: CustomEvent) {
    setTimeout(() => {
      alert('CLICKED');
    }, 300);
  }

  static get styles() {
    return [
      Layouts,
      css`
        .something {
          margin: 32px;
        }
        md-fab-extended {
          margin: 16px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="layout vertical center-center">
        <div class="something">Something = ${this.something}</div>
        <md-fab-extended
          icon="settings"
          @click="${this.handleClicked}"
          .label="${this.something}"
        ></md-fab-extended>
      </div>
    `;
  }
}
