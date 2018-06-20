<template>
    <div class="apiSecretkey">
       <b-container>
           <b-row>
               <b-col>
                   <div>
                        <b-navbar type="dark" variant="primary" toggleable>
                            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
                            <b-collapse is-nav id="nav_dropdown_collapse">
                            <b-navbar-nav>
                                <b-nav-item href="#">Home</b-nav-item>
                                <b-nav-item href="#">Link</b-nav-item>
                                <!-- Navbar dropdowns -->
                                <b-nav-item-dropdown text="Lang" right>
                                <b-dropdown-item href="#">EN</b-dropdown-item>
                                <b-dropdown-item href="#">ES</b-dropdown-item>
                                <b-dropdown-item href="#">RU</b-dropdown-item>
                                <b-dropdown-item href="#">FA</b-dropdown-item>
                                </b-nav-item-dropdown>
                                <b-nav-item-dropdown text="User" right>
                                <b-dropdown-item href="#">Account</b-dropdown-item>
                                <b-dropdown-item href="#">Settings</b-dropdown-item>
                                </b-nav-item-dropdown>
                            </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>
                    </div>
               </b-col>
           </b-row>
       </b-container>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus">

</style>
