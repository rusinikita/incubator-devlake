/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import styled from 'styled-components';

export const Transformation = styled.div``;

export const CICD = styled.div`
  h3 {
    margin-top: 16px;

    .switch {
      display: inline-flex;
      align-items: center;
      margin-left: 16px;
      font-size: 14px;
      font-weight: 400;

      .bp4-switch {
        margin-bottom: 0;
      }
    }
  }

  .text {
    display: flex;
    align-items: baseline;
    margin-top: 16px;
    padding-left: 24px;

    .bp4-radio {
      margin-right: 0;
    }
  }
`;

export const DataScope = styled.div``;

export const JobLoad = styled.div`
  display: flex;
  align-items: center;

  & > span.count {
    margin: 0 8px;
    color: #7497f7;
  }
`;
