const obj = {id: 1, firtname: "Anna" }

// Mutable Add
obj.lastname = "Smith"; // add new property

// Immutable Add
// without [] syntax, the field name will be "field" instead of the value of the field variable
const addToobj = (obj, field, value) => ({
    ...obj,   [field]: value
}) //return new object with added property
const obj2 = addToobj(obj, "lastname", "Smith");
console.log(obj2) // { id: 1, firtname: 'Anna', lastname: 'Smith' }

// Immutable Update, exacly the same as add
const updateObj = (obj, field, value) => ({
    ...obj,   [field]: value
}) //return new object with updated property
const obj3 = updateObj(obj2, "lastname", "Johnson");
console.log(obj3) // { id: 1, firtname: 'Anna', lastname: 'Johnson' }

// Immutable Delete
const deleteFromObj = (obj, field) => {
    const { [field]: _,... objToReturn } = obj; // destructure the object and exclude the field to delete
    return objToReturn; // return the new object without the deleted field
}