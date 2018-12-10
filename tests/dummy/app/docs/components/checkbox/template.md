# Checkbox

HTML `<input type="checkbox">` wrapper.

{{#docs-demo as |demo|}}
  {{#demo.example name="checkbox-example.hbs"}}
    <Checkbox
      @label="Shall we?"
      checked={{this.checked}}
      onchange={{action (mut this.checked) value="target.checked"}}
      onfocus={{action (mut this.currentEvent) "'onfocus' called"}}
      onblur={{action (mut this.currentEvent) "'onblur' called"}}
      class="custom-class" />

    <div class="docs-debug">
      Current value: {{this.checked}}<br>
      Debug: {{this.currentEvent}}
    </div>
  {{/demo.example}}

  {{demo.snippet "checkbox-example.hbs"}}
{{/docs-demo}}