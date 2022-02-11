# SICC_Intel
I was annoyed at having to choose between taking a Docs case or a SICC depending on what map I was going in to and what I planned to do in there; often neither case was entirely appropriate. So this mod started off by enabling both Intelligence folders and the new (as of 12.12) Keycard holder cases to be stored inside a S I C C organizational pouch.
 
Since then I've expanded it a little to include other items that fit in a Docs case but not a SICC, and vice versa. So with all the features enabled (see [Config Settings](#configsettings)) the Docs case and SICC pouches will both take exactly the same types of items. The only differences will be size (5x5 for the SICC and 4x4 for the Docs) and of course price.

Since the two cases are now so similar in function, I've added options to alter the shape and size of the cases, so that you can adjust the balance how you see fit. The provided config file has the default sizes.

I'd like to be able to configure the base price for both items in this mod too, again to help rebalance the cases, but I haven’t figured that out just yet. Feel free to fork the repo and help out! 😃

-----

<a id="configsettings"></a>
# Config Settings:
```javascript
"Change_SICC":true,     //  true/false - Determines if the SICC pouch will allow all items from the Docs case too.
"Change_Docs":true,     //  true/false - Determines if the Docs case will allow all items from the SICC pouch too.
"SICC_Horizontal":5,    //  integer - default 5 - Set the horizontal size of the SICC pouch
"SICC_Vertical":5,      //  integer - default 5 - Set the vertical size of the SICC pouch
"Docs_Horizontal":4,    //  integer - default 4 - Set the horizontal size of the Docs case
"Docs_Vertical":4       //  integer - default 4 - Set the vertical size of the Docs case
```  
----
  
#  **WARNING!**
If you have an item in one of the cases that would usually be excluded from that case, then you turn that part of the mod off, you will lose that item to the Tarkov gods.

For example, if you have an Intelligence Folder inside the SICC Pouch and you set ```"Change_SICC":false```, Tarkov will eat your Intelligence folder and you will be sad. And poorer.

## You have been warned.
