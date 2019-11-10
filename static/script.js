// Adding Submit button for user registartion form
var submit_input = document.createElement("input");
var user_reg_form = document.getElementById("user_reg_form");
user_reg_form.appendChild(submit_input);

// adding attributes to the submit input button
var submit_input_att_type = document.createAttribute("type");
submit_input_att_type.value = "submit";
var submit_input_att_value = document.createAttribute("value");
submit_input_att_value.value = "Submit";
var submit_input_att_id = document.createAttribute("id");
submit_input_att_id.value = "submit";
submit_input.setAttributeNode(submit_input_att_type);
submit_input.setAttributeNode(submit_input_att_value);
submit_input.setAttributeNode(submit_input_att_id);

//adding attributes for name input
var name_input = document.getElementById("name");
var name_input_att_maxlength = document.createAttribute("maxlength");
name_input_att_maxlength.value = 100;
name_input.setAttributeNode(name_input_att_maxlength);

// email input
var email_input = document.getElementById("email");
var email_input_att_type = email_input.getAttributeNode("type");
email_input_att_type.value = "email";

//function for validating form.
function form_validation() {

    var x_name = validate_name();
    var x_email = validate_email();
    var x_yob = validate_yob();

    if(x_name == false || x_email == false || x_yob == false){
        return false;
    }
    else if (x_name == "lib" && x_yob == "lib"){
        document.getElementById("available_basket_div").style.visibility = "visible";
        //Display Librarian
        var div_lib= document.createElement("div");
        div_lib.innerHTML= "<br><div id=div_lib_inner1><strong style =\"font-size:30px;\" > Librarian</strong></div>";
        document.getElementsByTagName("BODY")[0].replaceChild(div_lib , document.getElementById("user_reg_form"));
        // document.getElementById("available_basket_div").style.visibility= 'hidden';

        //display functionality buttons.
        var div_lib_buttons= document.createElement("div");
        div_lib_buttons.innerHTML= "<br><div id=div_lib_buttons_inner1><button type=\"button\" onclick=\"add_item_lib()\">Add</button>   <button type=\"button\" onclick=\"remove_item_lib()\">Delete</button>   <button type=\"button\" onclick=\"change_item_lib()\">Update</button>   <button type=\"button\" onclick=\"find_item_lib()\">Find Item</button>  <button type=\"button\" onclick=\"document.location.reload(true)\">Log Out</button></div>";
        document.getElementById("div_lib_inner1").appendChild(div_lib_buttons);

    }
    else{
        var y_name = document.getElementById("name").value;
        var y_email = document.getElementById("email").value;
        var y_yob = document.getElementById("birth-year").value;
        var present_date = new Date();
        var adult_child = "";

        var div1 = document.createElement("div");
        if(present_date.getFullYear() - y_yob < 18){
            adult_child = "Child";
        }
        else{
            adult_child = "Adult";
        }
        var div1_2 = document.createElement("div");
        div1.appendChild(div1_2);
        div1_2.setAttribute("id" , "div1_2");
        div1_2.innerHTML = y_name + "   " + "(" + y_email + ")" + "   " + "[" + adult_child + "]";
        document.getElementsByTagName("BODY")[0].replaceChild(div1 , document.getElementById("user_reg_form"));

        document.getElementById("available_basket_div").style.visibility = "visible";
        get_data_all();
        // call_async_poll();

    }
    
}

function validate_name(){
    var func_name = document.getElementById("name").value;
    var letters = /^[a-zA-Z ]+$/; //to sanitize
    if(func_name == "admin"){
        return "lib";
    }
    else if (Boolean(func_name.match(letters)))
    {
        return true;
    }
    else if(func_name == "")
    {
        alert("Name cannot be empty!");
        return false;
    }
    else{
        alert("Please enter a valid name");
        return false;
    }
}
function validate_email(){
    var func_email = document.getElementById("email").value;
    if(func_email == ""){
        alert("Email cannot be empty!");
        return false;
    }
    else{
        return true;
    }
}
function validate_yob(){
    var func_yob = document.getElementById("birth-year").value;
    var present_date = new Date();
    if(func_yob == 1867){
        return "lib";
    }
    else if(func_yob == ""){
        alert("Year cannot be empty!");
        return false;
    }
    else if(func_yob < 1900) 
    {
        alert("Year cannot be less than 1900");
        return false;
    }
    else if(func_yob > present_date.getFullYear()){
        alert("Year cannot be more than " + present_date.getFullYear());
        return false;
    }
    else if(isNaN(func_yob)){
        alert("Please enter a valid year");
        return false;
    }
    else{
        return true;
    }
}

//calling the validation function on submitting the form
// window.onload = function(){
//     document.getElementById("user_reg_form").addEventListener('submit',form_validation);
//     // document.getElementById("submit").onclick = function() {form_validation()};
// }
document.getElementById("user_reg_form").addEventListener('submit',form_validation);
// document.getElementById("user_reg_form").onsubmit = function() {form_validation();return false};
// document.getElementById("submit").onclick = function() {form_validation() ; return false};
// document.getElementById("user_reg_form").addEventListener("submit",form_submit);

//function to create Add button.

function add_button(li_id_available, add_button_id){
    var li_add_button = document.createElement("button");
    var li_node_available = document.getElementById(li_id_available);
    li_node_available.appendChild(li_add_button);
    var li_add_button_att_type = document.createAttribute("type");
    li_add_button_att_type.value = "button";
    li_add_button.setAttributeNode(li_add_button_att_type);
    var li_add_button_text_node = document.createTextNode("Add");
    li_add_button.appendChild(li_add_button_text_node)
    var li_add_button_att_name = document.createAttribute("name");
    li_add_button_att_name.value = "Add";
    li_add_button.setAttributeNode(li_add_button_att_name);
    // var li_add_button_att_id = document.createAttribute("id");
    // li_add_button_att_id.value = add_button_id;
    // li_add_button.setAttributeNode(li_add_button_att_id);
    li_add_button.setAttribute("id" , add_button_id);
}

//function calls to add button 

add_button("book1" , "book1_add_button");
add_button("book2" , "book2_add_button");
add_button("book3" , "book3_add_button");
add_button("book4" , "book4_add_button");
add_button("book5" , "book5_add_button");
add_button("book6" , "book6_add_button");
add_button("cd1" , "cd1_add_button");
add_button("cd2" , "cd2_add_button");
add_button("cd3" , "cd3_add_button");
add_button("cd4" , "cd4_add_button");


var french_names = ["Aventure" ,"Chris Serviette" , "Écharpe Danse" , "Désespoir" , "La Outsiders" , "Tour" , "Destin CD" , "Immortelles CD" ,"Tanzplagen CD" ,"Xénon CD"]; 
var mandarin_names = ["冒险" , "克里斯·托威尔" , "围巾舞" , "绝望" , "外来者" , "游览" , "命运" , "不朽" , "坦普拉根" ,"氙"];
var hindi_names = ["एडवेंचर" , "क्रिस टॉवेल" , "स्कार्फ़ डांस" , "डेस्पेयर" , "थे ओत्सीडर्स" , "टूर" , "डेस्टिनी" , "इम्मोर्टल्स" , "तनज़्पलेगें" ,"क्सीनन"];
var type_BCD = ["book" , "book" , "book" , "book" , "book" , "book" , "cd" , "cd" , "cd" , "cd"];
var due_dates_arr = [30,30,30,30,30,30,10,10,10,10]; 

//add due date to available list
var available_ol = document.getElementById("available-items");
var available_li = available_ol.getElementsByTagName("li");
function count_available_list_items(){
    var i = 0, li_available_count = 0;
    while(available_li[i++]){
        li_available_count++;
    }
    return li_available_count;
}
for(var i = 0; i<count_available_list_items(); i++){
    var due_para_available = document.createElement("p");
    due_para_available.id = "due_available" + i;
    // console.log(due_para_available.id);
    due_para_available.innerHTML = "Due in " + due_dates_arr[i] + " days";
    available_li[i].appendChild(due_para_available);
}
//avaiable to basket function.

function available_to_basket(li_id_available , remove_button_id, index){
    var lang_prompt = prompt("Enter one of the languages to convert: French, Mandarin, Hindi" , "English");
    var li_item_available = document.getElementById(li_id_available);
    var li_item_basket = li_item_available.cloneNode(true);
    
    if(lang_prompt != null){
        if(lang_prompt.toUpperCase() == "FRENCH"){
            li_item_basket.childNodes[2].nodeValue = french_names[index];
        }
        else if(lang_prompt.toUpperCase() == "MANDARIN"){
            li_item_basket.childNodes[2].nodeValue = mandarin_names[index];
        }
        else if(lang_prompt.toUpperCase() == "HINDI"){
            li_item_basket.childNodes[2].nodeValue = hindi_names[index];
        }
    }

    var d = new Date();
    var due_date = new Date();
    // if(li_id_available == "cd1" || li_id_available == "cd2" || li_id_available == "cd3" || li_id_available== "cd4"){
    //     due_date.setDate(d.getDate() + 10);
    //     due_date = due_date.toISOString().substring(0,10);
    // }
    // else{
    //     due_date.setDate(d.getDate() + 30);
    //     due_date = due_date.toISOString().substring(0,10);
    // }
    due_date.setDate(d.getDate() + Number(due_dates_arr[index]));
    due_date = due_date.toISOString().substring(0,10);
    var due_date_para = document.createElement("p");
    due_date_para.innerHTML = "Due on " + due_date;
    // li_item_basket.insertAdjacentElement("afterend" , due_date_para);
    li_item_basket.appendChild(due_date_para);

    document.getElementById("basket").appendChild(li_item_basket);
    // li_item_available.remove();
    li_item_available.style.display = "none"; //using style.display = none instead of remove().
    li_item_basket.childNodes[0].style.display = "none"; //removes the photo
    li_item_basket.childNodes[4].style.display = "none"; //removes due in _ days
    //
    var li_remove_button = document.createElement("button");
    // var li_node_basket = document.getElementById("li_id_basket");
    // li_node_basket.appendChild(li_remove_button);
    // li_remove_button.setAttribute("type" , "button");
    var li_remove_button_att_type = document.createAttribute("type");
    li_remove_button_att_type.value = "button";
    li_remove_button.setAttributeNode(li_remove_button_att_type);
    var li_remove_button_text_node = document.createTextNode("Remove");
    li_remove_button.appendChild(li_remove_button_text_node);
    // li_remove_button.setAttribute("name" , "Remove");
    var li_remove_button_att_name = document.createAttribute("name");
    li_remove_button_att_name.value = "Remove";
    li_remove_button.setAttributeNode(li_remove_button_att_name);
    li_remove_button.setAttribute("id" , remove_button_id);
    //
    li_item_basket.replaceChild(li_remove_button, li_item_basket.childNodes[3]);

    function click_remove(){
        li_item_basket.remove();
        li_item_available.style.display = "list-item";
    }
    document.getElementById(remove_button_id).onclick = function() {click_remove()};
}

//using onclick to add button for available_to_basket()

document.getElementById("book1_add_button").onclick = function() {available_to_basket("book1" , "book1_remove_button" , 0)}; 
document.getElementById("book2_add_button").onclick = function() {available_to_basket("book2" , "book2_remove_button" , 1)};
document.getElementById("book3_add_button").onclick = function() {available_to_basket("book3" , "book3_remove_button" , 2)};
document.getElementById("book4_add_button").onclick = function() {available_to_basket("book4" , "book4_remove_button" , 3)};
document.getElementById("book5_add_button").onclick = function() {available_to_basket("book5" , "book5_remove_button" , 4)};
document.getElementById("book6_add_button").onclick = function() {available_to_basket("book6" , "book6_remove_button" , 5)};
document.getElementById("cd1_add_button").onclick = function() {available_to_basket("cd1" , "cd1_remove_button" , 6)};
document.getElementById("cd2_add_button").onclick = function() {available_to_basket("cd2" , "cd2_remove_button" , 7)};
document.getElementById("cd3_add_button").onclick = function() {available_to_basket("cd3" , "cd3_remove_button" , 8)};
document.getElementById("cd4_add_button").onclick = function() {available_to_basket("cd4" , "cd4_remove_button" , 9)};


//add event listener not working - 
    //addEventListener("click" , available_to_basket("book1"));
    // document.getElementById("book2_add_button").addEventListener("click" , available_to_basket("book2"));


// add checkout button
// var body_tag = document.getElementsByTagName("BODY")[0];
var checkout_button = document.createElement("button");
checkout_button.setAttribute("type" , "button");
checkout_button.setAttribute("id" , "checkout_button_id");
var checkout_button_text_node = document.createTextNode("Checkout");
checkout_button.appendChild(checkout_button_text_node);
document.getElementById("available_basket_div").appendChild(checkout_button);

//function to count items in list
function count_basket_list_items(){
    var basket_ol = document.getElementById("basket");
    var i = 0, li_basket_count = 0;
    while(basket_ol.getElementsByTagName('li')[i++]){
        li_basket_count++;
    }
    return li_basket_count;
}

//onclick checkout window confirm function
function checkout_confirm(){
    var item_count_return_basket = count_basket_list_items();
    if (item_count_return_basket == 0){
        var confirm_value = confirm("Please add items to basket in order to checkout");
    }
    else{
        var confirm_value = confirm("Checkout " + item_count_return_basket + " items?");
    }
    var ol_available = document.getElementById("available-items");
    var ol_basket = document.getElementById("basket");
    /*if(confirm_value == false){
        var i = 0;
        while(basket_ol.getElementsByTagName('li')[i++]){
            basket_ol.getElementsByTagName('li')[i].remove();
        }
    }*/
    // function count_available_list_items(){
    //     var available_ol = document.getElementById("available-items");
    //     var i = 0, li_available_count = 0;
    //     while(available_ol.getElementsByTagName('li')[i++]){
    //         li_available_count++;
    //     }
    //     return li_available_count;
    // }
    // console.log("sss" + count_available_list_items());
    var li_basket_checkout_cancel = ol_basket.getElementsByTagName("li");
    var li_available_checkout_cancel = ol_available.getElementsByTagName("li");
    if(confirm_value == true){
        for(var i=0; i<item_count_return_basket;){
            li_basket_checkout_cancel[i].remove();
            item_count_return_basket--;
        }        
    }
    else{
        for(var i=0; i<item_count_return_basket;){
            for (var j = 0; j<10; j++) {
                if(li_available_checkout_cancel[j].childNodes[2].nodeValue == li_basket_checkout_cancel[i].childNodes[2].nodeValue){
                    li_available_checkout_cancel[j].style.display = "list-item";
                    console.log(li_available_checkout_cancel[j]);
                    console.log(li_basket_checkout_cancel[i]);
                    console.log(item_count_return_basket);
                    li_basket_checkout_cancel[i].remove();
                    item_count_return_basket--;
                }
            }
            // console.log(li_basket_checkout_cancel[i].childNodes[0].nodeName)
            // console.log(typeof li_basket_checkout_cancel[i]);
            //
            // console.log(li_basket_checkout_cancel[i]);
            // li_basket_checkout_cancel[i].childNodes[4].style.display = "block"; //display due in _ days.
            // li_basket_checkout_cancel[i].childNodes[5].style.display = "none"; //remove due date.
            // li_basket_checkout_cancel[i].childNodes[0].style.display = "block";//display image.
            // var new_add = document.createElement("button");
            // new_add.setAttribute("type" , "button");
            // var new_add_text_node = document.createTextNode("Add");
            // new_add.appendChild(new_add_text_node);
            // li_basket_checkout_cancel[i].replaceChild(new_add , li_basket_checkout_cancel[i].childNodes[3]) //replace remove with add
            // ol_available.appendChild(li_basket_checkout_cancel[i]);
            // item_count_return_basket--;
            //
        }
    }
}
document.getElementById("checkout_button_id").onclick = function() {checkout_confirm()};
//librarian functions.
function add_item_lib(){

    document.getElementById("available_basket_div").style.visibility= 'hidden';
    var div_lib_add= document.createElement("div");
    div_lib_add.id="div_lib_add";
    div_lib_add.innerHTML= "<h3>Enter Item Details to Add</h3><br>"+
                            
                            "ID: <input type=\"text\" id=\"add_item_lib_id\"><br>"+

                            "Name: <input type=\"text\" id=\"add_item_lib_name\"><br>"+

                            "Image: <input type=\"text\" id=\"add_item_lib_img\"><br>"+

                            "Book/CD: <input type=\"text\" id=\"add_item_lib_BCD\"><br>"+

                            "Quantity: <input type=\"number\" id=\"add_item_lib_quantity\"><br>"+

                            "Due(in days): <input type=\"text\" id=\"add_item_lib_duedate\"><br>"+

                            "<button id = \"add_item_lib_button\" type=\"button\" onclick=\"add_item_lib_data(); post_data();\">Add Item</button>";

    document.getElementById("div_lib_inner1").appendChild(div_lib_add);

}
function add_item_lib_data(){
    var x_add_name = document.getElementById("add_item_lib_name").value;
    var x_add_bcd = document.getElementById("add_item_lib_BCD").value;
    var x_add_duedate = document.getElementById("add_item_lib_duedate").value;
    var x_add_img = document.getElementById("add_item_lib_img").value;

    if(x_add_name != "" || x_add_bcd != "" || x_add_duedate != ""){
        var add_item_lib_li = document.createElement("li");
        add_item_lib_li.innerHTML = "<img src = \"images/" + x_add_img + ".jpg\"><br>"+ x_add_name + " <button>Add</button>";
        document.getElementById("available-items").appendChild(add_item_lib_li);
        type_BCD.push(x_add_bcd);
        due_dates_arr.push(x_add_duedate);
        var add_item_lib_li_due = document.createElement("p");
        add_item_lib_li_due.innerHTML = "Due in " + x_add_duedate + " days"
        add_item_lib_li.appendChild(add_item_lib_li_due);
    }
    else{
        alert("Enter valid details");
        return false;
    }
    document.getElementById("available_basket_div").style.visibility = "visible";
    document.getElementById("div_lib_add").style.display = "none";
}
function remove_item_lib(){

    document.getElementById("available_basket_div").style.visibility= 'hidden';
    var div_lib_remove= document.createElement("div");
    div_lib_remove.id="div_lib_remove";
    div_lib_remove.innerHTML= "<h3>Enter Item Details to Remove</h3><br>"+

                            "ID: <input type=\"text\" id=\"remove_item_lib_id\"><br>"+

                            "Name: <input type=\"text\" id=\"remove_item_lib_name\"><br>"+

                            "<button id = \"remove_item_lib_button\" type=\"button\" onclick=\"remove_item_lib_data(); delete_data();\">Delete Item</button>";

    document.getElementById("div_lib_inner1").appendChild(div_lib_remove);
}
function remove_item_lib_data(){
    var x_remove_name = document.getElementById("remove_item_lib_name").value;
    if(x_remove_name != ""){
        var remove_available_ol = document.getElementById("available-items");
        var remove_available_li = remove_available_ol.getElementsByTagName("li");
        function count_available_list_items(){
            var i = 0, li_available_count = 0;
            while(remove_available_li[i++]){
                li_available_count++;
            }
            return li_available_count;
        }
        var available_item_count = count_available_list_items();
        // console.log(available_item_count);
        // console.log(x_remove_name);
        // console.log(remove_available_li[0].childNodes[4].nodeValue);
        for(var i = 0; i<available_item_count; i++){
            var check_remove = remove_available_li[i].childNodes[2].nodeValue;
            // console.log(check_remove);
            if(check_remove == x_remove_name){
                // console.log(x_remove_name);
                remove_available_li[i].remove();
                break;
            }
        }
    }
    else{
        alert("Enter Valid Details");
        return false;
    }
    document.getElementById("available_basket_div").style.visibility = "visible";
    document.getElementById("div_lib_remove").style.display = "none";
}
function change_item_lib(){

    document.getElementById("available_basket_div").style.visibility= 'hidden';
    var div_lib_change= document.createElement("div");
    div_lib_change.id="div_lib_change";
    div_lib_change.innerHTML= "<h3>Enter Item Details to Change Due Date </h3><br>"+

                            "ID: <input type=\"text\" id=\"change_item_lib_id\"><br>"+

                            "Name: <input type=\"text\" id=\"change_item_lib_name\"><br> "+

                            "Quantity: <input type=\"number\" id=\"change_item_lib_quantity\"><br>"+

                            "Loan Period: <input type=\"number\" id=\"change_item_lib_duedate\"><br>"+

                            "<button id = \"change_item_lib_button\" type=\"button\" onclick=\"change_item_lib_data(); put_data();\">Update</button>";

    document.getElementById("div_lib_inner1").appendChild(div_lib_change); 

}
function change_item_lib_data(){
    var x_change_name = document.getElementById("change_item_lib_name").value;
    var x_change_duedate = document.getElementById("change_item_lib_duedate").value;
    if(x_change_name != "" || x_change_duedate != ""){
        var change_available_ol = document.getElementById("available-items");
        var change_available_li = change_available_ol.getElementsByTagName("li");
        function count_available_list_items(){
            var i = 0, li_available_count = 0;
            while(change_available_li[i++]){
                li_available_count++;
            }
            return li_available_count;
        }
        var available_item_count = count_available_list_items();
        for(var i = 0; i<available_item_count; i++){
            var check_change = change_available_li[i].childNodes[2].nodeValue;
            if(x_change_name == check_change){
                due_dates_arr[i] = x_change_duedate;
                console.log(due_dates_arr[i]);
                document.getElementById("due_available" + i).innerHTML = "Due in " + due_dates_arr[i] + " days";
                break;
            }
            }
            console.log(due_dates_arr);
        }
    else{
        alert("Enter Valid Details");
        return false;
    }
    document.getElementById("available_basket_div").style.visibility = "visible";
    document.getElementById("div_lib_change").style.display = "none";
}

function find_item_lib(){

    document.getElementById("available_basket_div").style.visibility= 'hidden';
    var div_lib_find= document.createElement("div");
    div_lib_find.id="div_lib_remove";
    div_lib_find.innerHTML= "<h3>Enter Item Details to Find</h3><br>"+

                            "ID: <input type=\"text\" id=\"find_item_lib_id\"><br>"+

                            "Name: <input type=\"text\" id=\"find_item_lib_name\"><br>"+

                            "<button id = \"find_item_lib_button\" type=\"button\" onclick=\"get_data_by_id()\">Find Item</button>";

    document.getElementById("div_lib_inner1").appendChild(div_lib_find);
}

    // //Fetch for POST(Create element Lab3)
    // // const POST_url = '/'
    // // const POST_url = '/library';
function post_data(){
    const POST_url = 'http://localhost:8080/library/create';
    var post_id = document.getElementById("add_item_lib_id").value;
    var post_name = document.getElementById("add_item_lib_name").value;
    var post_type = document.getElementById("add_item_lib_BCD").value;
    var post_image = document.getElementById("add_item_lib_img").value;
    var post_quantity = document.getElementById("add_item_lib_quantity").value;
    var post_loan_period = document.getElementById("add_item_lib_duedate").value;
    var sanitize_ln = /[^A-Za-z0-9]+/;
    if(post_id != "" || post_name!= "" || post_type!= "" || Boolean(post_id.match(sanitize_ln)) || Boolean(post_type.match(/book/i)) || Boolean(post_type.match(/cd/i))){
        var create_data = {
            _id: post_id,
            name: post_name,
            type: post_type,
            image: post_image,
            quantity: post_quantity,
            loan_period: post_loan_period
        };

        var post_request = new Request(POST_url,{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(create_data)
            // headers: new Headers(),
            // body: create_data
        });

        fetch(post_request)
            // .then((res) => res.json())
        // .then(function (data) {  
        //     console.log('fetch post success: ', data);  
        //     })
        .then(res => {
            if(res.ok){
                return res;
            }
            else{
                throw Error(`Request rejected with status ${res.status}`);
            }
        })
        // .then((res) => res.body())
        .catch(function (error){
            console.log("fetch post failed : ", error);
        });
    }
    else{
        console.log("Input not sanitized");
    }
}

//Fetch for PUT (Update quantity and loan Period)

function put_data(){
    var update_data = {
        quantity: document.getElementById("change_item_lib_quantity").value,
        loan_period: document.getElementById("change_item_lib_duedate").value
    };
    var x_change_id = document.getElementById("change_item_lib_id").value;
    var put_request = new Request('http://localhost:8080/library/' + x_change_id + '/update',{
        method: 'PUT',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(update_data)
    });
    fetch(put_request)
    .then(res => {
        if(res.ok){
            return res;
        }
        else{
            throw Error(`Request rejected with status ${res.status}`);
        }
    })
    .catch(function (error){
        console.log("fetch PUT failed : ", error);
    });
}

//Fetch for DELETE

function delete_data(){
    var x_remove_id = document.getElementById("remove_item_lib_id").value;
    var delete_request = new Request('http://localhost:8080/library/' + x_remove_id + '/delete',{
        method: 'DELETE'
    });
    fetch(delete_request)
    .then(res => {
        if(res.ok){
            return res;
        }
        else{
            throw Error(`Request rejected with status ${res.status}`);
        }
    })
    .catch(function (error){
        console.log("fetch DELETE failed : ", error);
    });
}

//Fetch for GET for all //should work when submitting initial form
function get_data_all(){
    fetch('http://localhost:8080/library/find')
    .then(response => response.json())
    .then(data =>{
        console.log(data.length);
        data.forEach((element,i) => {
            console.log(element);
            console.log(i);
            index = 10+i;
            console.log(index);
            if(element.name != "" || element.type!= "" || element._id != ""){
                var add_item_lib_li = document.createElement("li");
                add_item_lib_li.id = element._id;
                // var temp_remove_button = document.createElement("button");
                // temp_remove_button.id = element._id+"_remove_button";
                type_BCD.push(element.type);
                due_dates_arr.push(element.loan_period);
                add_item_lib_li.innerHTML = "<img src = \"images/" + element.image + ".jpg\"><br>"+ element.name + " <button id = \"fetch_get_item_lib_button" +index+"\" type = \"button\">Add</button>";
                document.getElementById("available-items").appendChild(add_item_lib_li);
                var add_item_lib_li_due = document.createElement("p");
                add_item_lib_li_due.innerHTML = "Due in " + element.loan_period + " days";
                add_item_lib_li.appendChild(add_item_lib_li_due);
                var add_item_lib_li_quantity = document.createElement("p");
                add_item_lib_li_quantity.innerHTML = "Quantity: " + element.quantity;
                add_item_lib_li.appendChild(add_item_lib_li_quantity);
                document.getElementById("fetch_get_item_lib_button"+index).onclick = function() {available_to_basket(element._id, element._id+"_remove_button", index)};
            }
        })
    })
    .catch(function(error){
        console.log("fetch GET failed : ", error)
    }) 
}
function async_poll_5sec(){
    return new Promise(resolve => {
    setTimeout(() => {
        get_data_all();        
        console.log('Async polling after 5 secs');
        resolve('done'); 
        },5000);
    });   
 }
async function call_async_poll(){
    while(true){
        await async_poll_5sec();
    }
}

// add_item_lib_li.innerHTML = "<img src = \"images/" + element.image + ".jpg\"><br>"+ element.name + " <button type = \"button\" onclick = \"available_to_basket("+ element._id +" , "+element._id+"_remove_button,  " + index + ")\" >Add</button>";

//Fetch GET by ID
function get_data_by_id(){
    var x_find_id = document.getElementById("find_item_lib_id").value;
    if(x_find_id != ""){
        const get_url = 'http://localhost:8080/library/' + x_find_id + '/find';
        var div_find_list = document.createElement("div");
        div_find_list.id = "div_find_list_id";
        var find_ol = document.createElement("ol");
        find_ol.id = "find_ol_id";
        var find_li = document.createElement("li");
        find_li.id = "find_li_id";

        fetch(get_url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.name);
            if(data._id == x_find_id){
                find_li.innerHTML = "<img src = \"images/" + data.image + ".jpg\"><br>"+ data.name;
                var find_li_due = document.createElement("p");
                find_li_due.innerHTML = "Due in " + data.loan_period + " days";
                find_li.appendChild(find_li_due);
                var find_li_quantity = document.createElement("p");
                find_li_quantity.innerHTML = "Quantity: " + data.quantity;
                find_li.appendChild(find_li_quantity);
            }
        
        })
        .catch(function(error){
            console.log("fetch GET find by id failed : ", error);
        })
        document.getElementById("div_lib_inner1").appendChild(div_find_list);
        document.getElementById("div_find_list_id").appendChild(find_ol);
        document.getElementById("find_ol_id").appendChild(find_li);
        // document.getElementById("div_lib_find").style.display = "none";
    }
    else{
        alert("Enter Valid Details");
    }
}

