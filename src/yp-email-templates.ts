import { css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { Layouts } from './flexbox-literals/classes';
import { YpBaseElement } from './yp-base-element';

import '@material/web/fab/fab-extended.js';

import '@material/mwc-dialog';
import '@material/mwc-textarea/mwc-textarea.js';
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
import '@material/web/textfield/outlined-text-field.js';

import { Dialog } from '@material/mwc-dialog';
import { TonalButton } from '@material/web/button/lib/tonal-button.js';
import { TextArea } from '@material/mwc-textarea/mwc-textarea.js';
import { OutlinedTextField } from '@material/web/textfield/lib/outlined-text-field';
import { Checkbox } from '@material/web/checkbox/lib/checkbox.js';

const PagesTypes = {
  ChooseTemplate: 1,
  ColorsAndFonts: 2,
  Texts: 3,
  Preview: 4,
};

@customElement('yp-email-templates')
export class YpEmailTemplates extends YpBaseElement {
  @property({ type: String })
  something: string | undefined;

  @property({ type: String })
  emailTitle: string | undefined;

  @property({ type: String })
  primaryColor = '#112211';

  @property({ type: String })
  accentColor = '#FF0000';

  @property({ type: String })
  backgroundColor = '#FAFAFA';

  @property({ type: String })
  shortDescription: string | undefined;

  @property({ type: String })
  mainParagraph: string | undefined;

  @property({ type: String })
  footer: string | undefined;

  @property({ type: String })
  callToAction: string | undefined;

  @property({ type: Number })
  pageIndex = 1;

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

        md-outlined-text-field {
          margin-top: 24px;
        }

        mwc-textarea {
          width: 350px;
          --mdc-theme-primary: var(--md-sys-color-primary);
          --mdc-text-field-ink-color: var(--md-sys-color-on-surface);
          --mdc-text-area-outlined-hover-border-color: var(
            --md-sys-color-on-surface
          );
          --mdc-text-area-outlined-idle-border-color: var(
            --md-sys-color-on-surface
          );
          --mdc-notched-outline-border-color: var(
            --md-sys-color-on-surface-variant
          );
        }

        mwc-textarea.rounded {
          --mdc-shape-small: 4px;
        }
      `,
    ];
  }

  async inputsChanged() {
    this.callToAction = (this.$$('#callToAction') as OutlinedTextField).value;
    this.primaryColor = (this.$$('#primaryColor') as OutlinedTextField).value;
    this.accentColor = (this.$$('#accentColor') as OutlinedTextField).value;
    this.backgroundColor = (
      this.$$('#backgroundColor') as OutlinedTextField
    ).value;
    this.emailTitle = (this.$$('#emailTitle') as OutlinedTextField).value;
    this.shortDescription = (this.$$('#shortDescription') as TextArea).value;
    this.mainParagraph = (this.$$('#mainParagraph') as TextArea).value;
    this.footer = (this.$$('#footer') as TextArea).value;
  }

  renderTextInputs() {
    return html`
      <div class="layout horizontal">
        <div class="layout vertical"></div>
      </div>
    `;
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

          <md-outlined-text-field
            class="formField"
            label="Some input"
          ></md-outlined-text-field>

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

  renderEmailTemplate(template: any) {
    return html`
      <div class="layout vertical center-center">
        <img src="${template.imageUrl}" />
        <div class="name">${template.name}</div>
      </div>
    `;
  }

  emailTemplates = [
    {
      name: 'Template 1',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      name: 'Template 2',
      imageUrl: 'https://picsum.photos/200/301',
    },
    {
      name: 'Template 3',
      imageUrl: 'https://picsum.photos/200/302',
    },
    {
      name: 'Template 4',
      imageUrl: 'https://picsum.photos/200/303',
    },
    {
      name: 'Template 5',
      imageUrl: 'https://picsum.photos/200/304',
    },
  ];

  renderChooseTemplate() {
    return html`
      <div class="layout horizontal wrap">
        ${this.emailTemplates.map(t => this.renderEmailTemplate(t))}
      </div>
    `;
  }

  renderColorAndFonts() {
    return html`
      <div class="layout horizontal wrap">
        <md-outlined-text-field
          class="formField"
          id="primaryColor"
          @keydown="${this.inputsChanged}"
          label="Primary color"
          .value="${this.primaryColor}"
        ></md-outlined-text-field>

        <md-outlined-text-field
          class="formField"
          id="accentColor"
          @keydown="${this.inputsChanged}"
          label="Accent color"
          .value="${this.accentColor}"
        ></md-outlined-text-field>

        <md-outlined-text-field
          class="formField"
          id="backgroundColor"
          @keydown="${this.inputsChanged}"
          label="Background color"
          .value="${this.backgroundColor}"
        ></md-outlined-text-field>
      </div>
    `;
  }

  renderTexts() {
    return html`
      <md-outlined-text-field
        class="formField"
        id="emailTitle"
        @keydown="${this.inputsChanged}"
        label="Title"
      ></md-outlined-text-field>

      <mwc-textarea
        rows="5"
        id="shortDescription"
        class="rounded formField"
        label="Short description"
        outlined
        charCounter
        maxLength="250"
        @keydown="${this.inputsChanged}"
      >
      </mwc-textarea>

      <mwc-textarea
        rows="5"
        id="mainParagraph"
        class="rounded formField"
        label="Main paragraph"
        outlined
        charCounter
        maxLength="300"
        @keydown="${this.inputsChanged}"
      >
      </mwc-textarea>

      <md-outlined-text-field
        class="formField"
        id="callToAction"
        @keydown="${this.inputsChanged}"
        label="Link text"
      ></md-outlined-text-field>

      <mwc-textarea
        rows="5"
        id="footer"
        class="rounded formField"
        label="Footer"
        outlined
        charCounter
        maxLength="300"
        @keydown="${this.inputsChanged}"
      >
      </mwc-textarea>
    `;
  }

  _renderPage() {
    switch (this.pageIndex) {
      case PagesTypes.ChooseTemplate:
        return this.renderChooseTemplate();
      case PagesTypes.ColorsAndFonts:
        return this.renderColorAndFonts();
      case PagesTypes.Texts:
        return this.renderTexts();
      case PagesTypes.Preview:
        return this.renderPreview();
    }
  }

  renderPreview() {
    const text = `
      <mjml>
        <mj-body>
          <mj-section background-color="${this.backgroundColor}">
            <mj-column>
              <mj-image src="/assets/img/logo-small.png"></mj-image>

              <mj-divider border-color="${this.primaryColor}"></mj-divider>

              <mj-text font-size="20px" color="${this.accentColor}" font-family="helvetica"
                >${this.mainParagraph}</mj-text>

                <mj-button font-family="Helvetica" background-color="${this.accentColor}" color="white">
                ${this.callToAction}
               </mj-button>

            </mj-column>
          </mj-section>
          <mj-section background-color="${this.backgroundColor}">
            <mj-column>
               <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
                ${this.footer}
               </mj-text>
               <mj-image src="/assets/img/logo-small.png"></mj-image>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `;

    return html`<pre>${text}</pre>`;
  }

  render() {
    return html`
     <div class="layout vertical">
      <md-outlined-button label="Next" @click="${() => { this.pageIndex++}}"></md-outlined-button>
       ${this._renderPage()}
     </div>
    `;
  }
}
