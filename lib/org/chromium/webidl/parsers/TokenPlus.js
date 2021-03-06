// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

foam.CLASS({
  package: 'org.chromium.webidl.parsers',
  name: 'TokenPlus',
  extends: 'org.chromium.webidl.parsers.TokenRepeat',

  documentation: `A foam.parse.Plus, with each repitition separated by
    "separator".`,

  properties: [
    ['minimum', 1],
  ],

  methods: [
    function toString() {
      var str = 'tplus(' + this.p.toString();
      if (this.delimiter) str += ', ' + this.delimiter;
      str += ')';
      return str;
    }
  ],
});
