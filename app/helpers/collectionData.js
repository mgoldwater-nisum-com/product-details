export const stateData = [{"value":"AL","selected":true,"item":"Alabama"},{"value":"AK","selected":false,"item":"Alaska"},{"value":"AZ","selected":false,"item":"Arizona"},{"value":"AR","selected":false,"item":"Arkansas"},{"value":"CA","selected":false,"item":"California"},{"value":"CO","selected":false,"item":"Colorado"},{"value":"CT","selected":false,"item":"Connecticut"},{"value":"DE","selected":false,"item":"Delaware"},{"value":"FL","selected":false,"item":"Florida"},{"value":"GA","selected":false,"item":"Georgia"},{"value":"HI","selected":false,"item":"Hawaii"},{"value":"ID","selected":false,"item":"Idaho"},{"value":"IL","selected":false,"item":"Illinois"},{"value":"IN","selected":false,"item":"Indiana"},{"value":"IA","selected":false,"item":"Iowa"},{"value":"KS","selected":false,"item":"Kansas"},{"value":"KY","selected":false,"item":"Kentucky"},{"value":"LA","selected":false,"item":"Louisiana"},{"value":"ME","selected":false,"item":"Maine"},{"value":"MD","selected":false,"item":"Maryland"},{"value":"MA","selected":false,"item":"Massachusetts"},{"value":"MI","selected":false,"item":"Michigan"},{"value":"MN","selected":false,"item":"Minnesota"},{"value":"MS","selected":false,"item":"Mississippi"},{"value":"MO","selected":false,"item":"Missouri"},{"value":"MT","selected":false,"item":"Montana"},{"value":"NE","selected":false,"item":"Nebraska"},{"value":"NV","selected":false,"item":"Nevada"},{"value":"NH","selected":false,"item":"New Hampshire"},{"value":"NJ","selected":false,"item":"New Jersey"},{"value":"NM","selected":false,"item":"New Mexico"},{"value":"NY","selected":false,"item":"New York"},{"value":"NC","selected":false,"item":"North Carolina"},{"value":"ND","selected":false,"item":"North Dakota"},{"value":"OH","selected":false,"item":"Ohio"},{"value":"OK","selected":false,"item":"Oklahoma"},{"value":"OR","selected":false,"item":"Oregon"},{"value":"PA","selected":false,"item":"Pennsylvania"},{"value":"RI","selected":false,"item":"Rhode Island"},{"value":"SC","selected":false,"item":"South Carolina"},{"value":"SD","selected":false,"item":"South Dakota"},{"value":"TN","selected":false,"item":"Tennessee"},{"value":"TX","selected":false,"item":"Texas"},{"value":"UT","selected":false,"item":"Utah"},{"value":"VT","selected":false,"item":"Vermont"},{"value":"VA","selected":false,"item":"Virginia"},{"value":"WA","selected":false,"item":"Washington"},{"value":"WV","selected":false,"item":"West Virginia"},{"value":"WI","selected":false,"item":"Wisconsin"},{"value":"WY","selected":false,"item":"Wyoming"}]
export const sizeData = [{'value': 'Small', 'selected': true, 'item': 'Small'}, {'value': 'Medium', 'selected': false, 'item': 'Medium'}, {'value': 'Large', 'selected': false, 'item': 'Large'}];

/**
<select name="size">
    <option value="Small" selected>Small</option>
    <option value="Medium">Medium</option>
    <option value="Large">Large</option>
  </select>
 */

// const stateData = [{item: 'Alabama', value: 'AL', selected: false}, {item: 'Alaska', value: 'AK', selected: true}]

// const addSelected = function(data, selected) {
//   const newData = [];
//   const regex = new RegExp(selected);
//   for (let i = 0; i < data.length; i++) {
//     if (regex.test(data[i])) {
//       newData += 
//     }
//   }
// }
/*
'<option value="AL">Alabama</option>',
'<option value="AK">Alaska</option>',
'<option value="AZ">Arizona</option>',
'<option value="AR">Arkansas</option>',
'<option value="CA">California</option>',
'<option value="CO">Colorado</option>',
'<option value="CT">Connecticut</option>',
'<option value="DE">Delaware</option>',
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>]*/

/**
<option value="AL" selected>Alabama</option>
    <option value="AK">Alaska</option>
    <option value="AZ">Arizona</option>
    <option value="AR">Arkansas</option>
    <option value="CA">California</option>
    <option value="CO">Colorado</option>
    <option value="CT">Connecticut</option>
    <option value="DE">Delaware</option>
    <option value="FL">Florida</option>
    <option value="GA">Georgia</option>
    <option value="HI">Hawaii</option>
    <option value="ID">Idaho</option>
    <option value="IL">Illinois</option>
    <option value="IN">Indiana</option>
    <option value="IA">Iowa</option>
    <option value="KS">Kansas</option>
    <option value="KY">Kentucky</option>
    <option value="LA">Louisiana</option>
    <option value="ME">Maine</option>
    <option value="MD">Maryland</option>
    <option value="MA">Massachusetts</option>
    <option value="MI">Michigan</option>
    <option value="MN">Minnesota</option>
    <option value="MS">Mississippi</option>
    <option value="MO">Missouri</option>
    <option value="MT">Montana</option>
    <option value="NE">Nebraska</option>
    <option value="NV">Nevada</option>
    <option value="NH">New Hampshire</option>
    <option value="NJ">New Jersey</option>
    <option value="NM">New Mexico</option>
    <option value="NY">New York</option>
    <option value="NC">North Carolina</option>
    <option value="ND">North Dakota</option>
    <option value="OH">Ohio</option>
    <option value="OK">Oklahoma</option>
    <option value="OR">Oregon</option>
    <option value="PA">Pennsylvania</option>
    <option value="RI">Rhode Island</option>
    <option value="SC">South Carolina</option>
    <option value="SD">South Dakota</option>
    <option value="TN">Tennessee</option>
    <option value="TX">Texas</option>
    <option value="UT">Utah</option>
    <option value="VT">Vermont</option>
    <option value="VA">Virginia</option>
    <option value="WA">Washington</option>
    <option value="WV">West Virginia</option>
    <option value="WI">Wisconsin</option>
    <option value="WY">Wyoming</option>
 */