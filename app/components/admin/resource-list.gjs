import { get } from '@ember/helper';
import { LinkTo } from '@ember/routing';
import { helper } from '@ember/component/helper';
import { pluralize } from 'ember-inflector';

const itemRoute = helper(([item]) => {
  return `admin.${pluralize(item.constructor.modelName)}.edit`;
});

<template>
  {{#if @models}}
    <table class="table-auto w-full">
      <thead>
        <tr class="border-b-2">
          {{#each @fields as |field|}}
            <th class="text-left">{{field}}</th>
          {{/each}}
          <th class="text-left">Edit</th>
        </tr>
      </thead>
      <tbody>
        {{#each @models as |model|}}
          <tr class="border-b">
            {{#each @fields as |field|}}
              <td>{{get model field}}</td>
            {{/each}}
            <td class="py-2">
              <LinkTo @route={{itemRoute model}} @model={{model}} class="inline-block border bg-gray-200 py-1 px-4">Edit</LinkTo>
            </td>
          </tr>
        {{/each}}
      </tbody>
    </table>
  {{else}}
    <h1 class="text-2xl">
      No items found
    </h1>
  {{/if}}
</template>
