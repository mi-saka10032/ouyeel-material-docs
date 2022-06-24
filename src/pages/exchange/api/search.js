const template = {
  'keywordAnalyseResult': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': {},
    'labelName': null,
    'name': '分词结果',
    'nameCode': null,
    'type': null,
    'value': ''
  },
  'boundleTypes': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [
      {
        'name': '竞价',
        'value': '10'
      },
      {
        'name': '一口价',
        'value': '30'
      },
      {
        'name': '欧冶拍',
        'value': '40'
      },
      {
        'name': '测试拍',
        'value': '60'
      }
    ],
    'labelName': null,
    'name': '竞买方式',
    'nameCode': null,
    'type': 2,
    'value': null
  },
  'prodCat': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [],
    'labelName': null,
    'name': '大品类',
    'nameCode': null,
    'type': 2,
    'value': null
  },
  'productType': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [],
    'labelName': null,
    'name': '品种',
    'nameCode': {
      'C1A01004': '废电缆'
    },
    'type': 6,
    'value': 'C1A01004'
  },
  'providers': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [],
    'labelName': null,
    'name': '卖家',
    'nameCode': null,
    'type': 6,
    'value': null
  },
  'storeCity': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [
      {
        'isHot': 0,
        'letter': null,
        'name': '宝山',
        'number': null,
        'url': '',
        'value': '宝山',
        'weight': null
      },
      {
        'isHot': 0,
        'letter': null,
        'name': '湛江',
        'number': null,
        'url': '',
        'value': '湛江',
        'weight': null
      }
    ],
    'labelName': null,
    'name': '存放地',
    'nameCode': null,
    'type': 6,
    'value': null
  },
  'warehouse': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [],
    'labelName': null,
    'name': '仓库',
    'nameCode': null,
    'type': 6,
    'value': null
  },
  'shopSign': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [],
    'labelName': null,
    'name': '牌号',
    'nameCode': {},
    'type': 7,
    'value': ''
  },
  'spec': {
    'enable': true,
    'info': {
      'heightSpec': {
        'name': '厚度',
        'type': 5,
        'value': [
          '',
          ''
        ]
      },
      'widthSpec': {
        'name': '宽度',
        'type': 5,
        'value': [
          '',
          ''
        ]
      }
    },
    'name': '规格',
    'type': 8
  },
  'balanceWeight': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [
      {
        'name': '2吨以下',
        'value': '0/2'
      },
      {
        'name': '2-5吨',
        'value': '2/5'
      },
      {
        'name': '5-10吨',
        'value': '5/10'
      },
      {
        'name': '10-20吨',
        'value': '10/20'
      },
      {
        'name': '20吨以上',
        'value': '20'
      }
    ],
    'labelName': null,
    'name': '件重',
    'nameCode': null,
    'type': 9,
    'value': ''
  },
  'resStatus': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [
      {
        'name': '待竞价',
        'value': '30'
      },
      {
        'name': '竞价中',
        'value': '31'
      },
      {
        'name': '挂牌中',
        'value': '32'
      },
      {
        'name': '已结束',
        'value': '33,34'
      },
      {
        'name': '成交',
        'value': '50,51'
      },
      {
        'name': '流标',
        'value': '40'
      }
    ],
    'labelName': null,
    'name': '状态',
    'nameCode': null,
    'type': 9,
    'value': ''
  },
  'bidDate': {
    'display': 'text',
    'enable': true,
    'firstLineShowInfo': null,
    'info': [],
    'labelName': null,
    'name': '竞价时间',
    'nameCode': null,
    'type': 9,
    'value': '2022-05-24/'
  },
  'count': null
}

export const getSearchConditions = async () => {
  return template
}


