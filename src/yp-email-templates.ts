import { css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { Layouts } from './flexbox-literals/classes';
import { YpBaseElement } from './yp-base-element';

import '@material/web/fab/fab-extended.js';

import '@material/mwc-dialog';

import '@material/web/fab/fab-extended.js';
import '@material/web/formfield/formfield.js';
import '@material/web/radio/radio.js';
import '@material/web/button/elevated-button.js';
import '@material/web/button/text-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/tonal-button.js';
import '@material/web/button/filled-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/iconbutton/standard-icon-button.js';

import { Dialog } from '@material/mwc-dialog';
import { TonalButton } from '@material/web/button/lib/tonal-button.js';
import { TextArea } from '@material/mwc-textarea/mwc-textarea.js';
import { OutlinedTextField } from '@material/web/textfield/lib/outlined-text-field';
import { Checkbox } from '@material/web/checkbox/lib/checkbox.js';

@customElement('yp-email-templates')
export class YpEmailTemplates extends YpBaseElement {
  @property({ type: String })
  something: string | undefined;

  connectedCallback() {
    super.connectedCallback();
    this.something = 'SOME EMAIL TEMPLATES';
  }

  handleClicked(event: CustomEvent) {
    (this.$$('#helloWorldDialog') as Dialog).show();
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

        md-formfield {
          margin-top: 8px;
        }
      `,
    ];
  }

  renderHelloWorldDialog() {
    return html`
      <mwc-dialog
        id="helloWorldDialog"
        scrimClickAction=""
        escapeKeyAction=""
        modal
        heading="Hello world!"
      >
        <div class="layout vertical">
          Some information...

          <md-formfield label="Something to check">
            <md-checkbox name="activeConfirmed"></md-checkbox>
          </md-formfield>
        </div>
        <md-text-button
          label="Cancel"
          class="button"
          dialogAction="cancel"
          slot="secondaryAction"
        >
        </md-text-button>
        <md-tonal-button
          class="button okButton"
          label="OK"
          slot="primaryAction"
          dialogAction="ok"
        >
        </md-tonal-button>
      </mwc-dialog>
    `;
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
      ${this.renderHelloWorldDialog()}
    `;
  }
}
