/*
水果互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  //@Dong @ Smile @ mother @ big sister @jinge @ small sister@ 当小黑遇到小白@ father
  'e0f290656b634dbeab0a0da0747c8140@99efa1431bb54cd8a34aaa90717fa1d8@2b0a57da1bd443c6a2baaeb754fa11db@9fe64ff57c1c478084f1baa22c962ed8@17c01bb0afa84dc4a50abca68a3ebace@13ffc68593c54c908502064d23eda3cb@5ac72c51bec24628bdd88d514cd3df58@c2109f578a5447b69eb0ea956efa1661',//账号一的好友shareCode,不同好友中间用@符号隔开
  'e0f290656b634dbeab0a0da0747c8140@99efa1431bb54cd8a34aaa90717fa1d8@2b0a57da1bd443c6a2baaeb754fa11db@9fe64ff57c1c478084f1baa22c962ed8@17c01bb0afa84dc4a50abca68a3ebace@13ffc68593c54c908502064d23eda3cb@5ac72c51bec24628bdd88d514cd3df58@c2109f578a5447b69eb0ea956efa1661',//账号二的好友shareCode，不同好友中间用@符号隔开
  'e0f290656b634dbeab0a0da0747c8140@99efa1431bb54cd8a34aaa90717fa1d8@2b0a57da1bd443c6a2baaeb754fa11db@9fe64ff57c1c478084f1baa22c962ed8@17c01bb0afa84dc4a50abca68a3ebace@13ffc68593c54c908502064d23eda3cb@5ac72c51bec24628bdd88d514cd3df58@c2109f578a5447b69eb0ea956efa1661',
  'e0f290656b634dbeab0a0da0747c8140@99efa1431bb54cd8a34aaa90717fa1d8@2b0a57da1bd443c6a2baaeb754fa11db@9fe64ff57c1c478084f1baa22c962ed8@17c01bb0afa84dc4a50abca68a3ebace@13ffc68593c54c908502064d23eda3cb@5ac72c51bec24628bdd88d514cd3df58@c2109f578a5447b69eb0ea956efa1661',
  'e0f290656b634dbeab0a0da0747c8140@99efa1431bb54cd8a34aaa90717fa1d8@2b0a57da1bd443c6a2baaeb754fa11db@9fe64ff57c1c478084f1baa22c962ed8@17c01bb0afa84dc4a50abca68a3ebace@13ffc68593c54c908502064d23eda3cb@5ac72c51bec24628bdd88d514cd3df58@c2109f578a5447b69eb0ea956efa1661',
  'e0f290656b634dbeab0a0da0747c8140@99efa1431bb54cd8a34aaa90717fa1d8@2b0a57da1bd443c6a2baaeb754fa11db@9fe64ff57c1c478084f1baa22c962ed8@17c01bb0afa84dc4a50abca68a3ebace@13ffc68593c54c908502064d23eda3cb@5ac72c51bec24628bdd88d514cd3df58@c2109f578a5447b69eb0ea956efa1661'
]

// 判断github action里面是否有水果互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
