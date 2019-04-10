import Realm from 'realm';
export const BORROWER_DETAILS = "BorrowerDetails";

export const BorrowerDetails = {
  name: BORROWER_DETAILS,
  primaryKey:'id',
  properties:{
    id:'int',
    name:{type:'string', indexed:true},
    ic:{type:'string',indexed:true},
    phone:{type:'string', indexed:true},
    email:{type:'string', indexed:true},
    address:{type:'string', indexed:true},
  }
};

const databaseOptions = {
    path: 'borrowerdetails.realm',
    schema: [BorrowerDetails],
    schemaVersion: 0, //optional
};
//functions for borrower
export const insertNewBorrower = newBorrower => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(BORROWER_DETAILS, newBorrower);
            resolve(newBorrower);
        });
    }).catch((error) => reject(error));
});
export const updateBorrower = borrower => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let updatingBorrower = realm.objectForPrimaryKey(BORROWER_DETAILS, borrower.id);
            updatingBorrower.name = borrower.name;
            resolve();
        });
    }).catch((error) => reject(error));;
});
export const deleteBorrower = borrowerId => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let deletingBorrower = realm.objectForPrimaryKey(BORROWER_DETAILS, borrowerId);
            realm.delete(deletingBorrower);
            resolve();
        });
    }).catch((error) => reject(error));;
});
export const deleteAllBorrower = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            let allBorrower = realm.objects(BORROWER_DETAILS);
            realm.delete(allBorrower);
            resolve();
        });
    }).catch((error) => reject(error));;
});
export const queryAllBorrower = () => new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then(realm => {
        let allBorrower = realm.objects(BORROWER_DETAILS);
        resolve(allBorrower);
    }).catch((error) => {
        reject(error);
    });;
});
export default new Realm(databaseOptions);
